'use client';
import { Post } from '@/libs/types/post.type';
import { User } from '@/libs/types/user.type';
import { Button } from '@/components/shared/Button';
import { Badge } from '@/components/shared/Badge';
import Link from 'next/link';
import { Carousel } from '@/components/shared/Carousel';
import { Project } from '@/libs/types/project.type';
import { useState } from 'react';

const users: User[] = [
  { id: 1, email: 'alice@example.com' },
  { id: 2, email: 'bob@example.com' },
  { id: 3, email: 'charlie@example.com' },
];

// Sample data for ongoing petitions and projects
const posts: Post[] = [
  {
    id: 1,
    slug: 'clean-water-initiative',
    title: 'Clean Water Initiative',
    userId: 1,
    img: 'https://img.freepik.com/free-photo/lifestyle-scene-anime-style-with-person-doing-daily-tasks_23-2151002612.jpg',
    desc: 'A project aiming to provide clean water to underserved communities.',
    user: users[0],
    upvotes: [1, 2, 3, 4, 5], // Array of upvotes
  },
  {
    id: 2,
    slug: 'environmental-awareness-campaign', // Added slug
    title: 'Environmental Awareness Campaign',
    userId: 2,
    img: 'https://img.freepik.com/free-photo/autumn-night-illuminated-lantern-tree-yellow-leaf-generated-by-ai_188544-15642.jpg?t=st=1731905905~exp=1731909505~hmac=56e4a5478dd34616a972b90721f841c81428ee452d9df0cb333d29ebce70d6b0&w=1380',
    desc: 'Educating people about the importance of protecting the environment.',
    user: users[1],
    upvotes: [1, 3, 5, 7], // Array of upvotes
  },
  {
    id: 3,
    slug: 'education-for-all', // Added slug
    title: 'Education for All',
    userId: 3,
    img: 'https://img.freepik.com/free-photo/autumn-forest-acrylic-painting-spooky-mystery-dusk-generated-by-ai_188544-15640.jpg?t=st=1731905963~exp=1731909563~hmac=451ded3d1a30629cbb02e1f06d7f9a77ce67be188ff4624d9581423b049a119a&w=1380',
    desc: 'A project to provide education to children in remote areas.',
    user: users[2], // Linking user by userId
    upvotes: [1, 2, 4], // Array of upvotes
  },
];

const projects: Project[] = [
  {
    id: 1,
    slug: 'ai-image-generator',
    title: 'AI Image Generator',
    userId: 101,
    img: 'https://img.freepik.com/free-photo/digital-art-concept-showing-abstract-ai-robot_188544-12345.jpg',
    desc: 'A tool that generates stunning images using AI technology.',
    user: users[0], // Linking user by userId
    upvotes: [101, 102, 103], // Array of upvotes
  },
  {
    id: 2,
    slug: 'personal-budget-planner',
    title: 'Personal Budget Planner',
    userId: 102,
    img: 'https://img.freepik.com/free-photo/flat-lay-financial-concept-with-calculator_23-2148944456.jpg',
    desc: 'An app to help you manage your personal finances effectively.',
    user: users[1], // Linking user by userId
    upvotes: [103, 104], // Array of upvotes
  },
  {
    id: 3,
    slug: 'weather-forecast-app',
    title: 'Weather Forecast App',
    userId: 103,
    img: 'https://img.freepik.com/free-photo/digital-weather-forecast-interface-with-cloudy-background_188544-23123.jpg',
    desc: 'Get accurate weather updates for your location instantly.',
    user: users[2], // Linking user by userId
    upvotes: [101, 102, 103, 104], // Array of upvotes
  },
  {
    id: 4,
    slug: 'weather-forecast-app',
    title: 'Weather Forecast App',
    userId: 103,
    img: 'https://img.freepik.com/free-photo/front-view-people-eating-asian-food_23-2150288308.jpg?t=st=1732694326~exp=1732697926~hmac=b072d1b61f60c0143f048145b3b2444022b1d34785e826429199ee54ba1a2463&w=1060',
    desc: 'Get accurate weather updates for your location instantly.',
    user: users[2], // Linking user by userId
    upvotes: [101, 102, 103, 104], // Array of upvotes
  },
];

const Home = () => {
  const [trending, setTrending] = useState(true);

  function handleTrendingChange() {
    setTrending(!trending);
  }

  return (
    <main className="bg-white">
      <div className="flex w-full flex-col items-center justify-center bg-map bg-cover bg-center bg-no-repeat py-32 shadow-md">
        <h1
          className="relative animate-typing overflow-hidden whitespace-nowrap border-r-4 p-5 text-center text-4xl font-bold text-black"
          style={{ fontSize: 40 }}
        >
          Bersama Kita Wujudkan Perubahan Nyata
        </h1>
        <Link href={'/createpetition'}>
          <Button className="mt-6 border-2 border-black text-lg">
            Create Petition
          </Button>
        </Link>
      </div>
      <div>
        <div className="relative mx-auto max-w-4xl">
          {/* Badge */}
          <Badge className="absolute -left-2 -top-1 z-10 rounded bg-black px-3 py-1 text-sm text-white shadow-md">
            Trending now
          </Badge>
          {/* Carousel */}
          <Carousel post={trending ? posts : projects} />
        </div>
        <div className="flex justify-center">
          <Button
            className="border-2 border-black p-3"
            onClick={handleTrendingChange}
          >
            {trending ? 'Show Posts' : 'Show Projects'}
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
