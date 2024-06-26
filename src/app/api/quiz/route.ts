import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(req: Request) {
  const { topic, difficulty,} = await req.json();

  const topics = [
    'Pointers and Array',
    'Linked List',
    'Recursion',
    'Stack',
    'Queues',
    'Searching Algorithms',
    'Sorting Algorithms',
    'Binary trees',
    'Graph',
  ];
  const difficulties = ['easy', 'medium', 'hard'];


  if (!topics.includes(topic)) {
    return NextResponse.json({ error: 'topic Not valid input' }, { status: 400 });
  }

  if (!difficulties.includes(difficulty)) {
    return NextResponse.json({ error: 'diff Not valid input' }, { status: 400 });
  }
 
  const prompt = `Create a quiz with 8 questions about ${topic} in data structure
   and algorithm course, ${difficulty} difficulty. You should return JSON object with key 'questions' 
   which is array of question object. Under the 'questions' key, for each question, 
   provide a JSON object with four keys: 'question', 'options', 'explanation', 'answer'. Under 
   the 'options' key, include an array of four options. Always place the correct answer at index 0 
   within the 'answers' array. Avoid using letters (A, B, C, D or 1, 2, 3, 4) to label the options. 
   Give the correct answer as a value of 'answer' key. Focus on providing detailed explanations for the 
   correct answer under the 'explanation' key. Ensure that the explanations do not explicitly indicate which option is correct.
   `;

  const payload = {
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: prompt }],
    temperature: 0.7,
    max_tokens: 2000,
    n: 1,
  };

  try {
    const res: any = await fetch('https://api.openai.com/v1/chat/completions', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.API_KEY}`,
      },
      method: 'POST',
      body: JSON.stringify(payload),
      next: { revalidate: 300 },
    });

    const data = await res.json();

    const questions = JSON.parse(data.choices[0].message.content).questions;

    return NextResponse.json(questions);
  } catch (error) {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
