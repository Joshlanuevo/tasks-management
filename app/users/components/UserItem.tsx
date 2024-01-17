import React from 'react';
import Link from 'next/link';
import Card from '@/app/shared/components/UIElements/Card';
import Avatar from '@/app/shared/components/UIElements/Avatar';

interface UserItemProps {
    id: string;
    name: string;
    image: string;
    taskCount: number;
}

const UserItem: React.FC<UserItemProps> = (props) => {
  return (
    <li className="m-4 w-full md:w-2/4 lg:w-2/5 xl:w-2/5">
        <Card className="p-0">
            <Link href="/tasks" className="flex items-center w-full h-full no-underline p-4 text-white bg-gray-900 hover:bg-yellow-500">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-16 lg:h-16 xl:w-20 xl:h-20 mr-4">
                    <Avatar image={props.image} alt={props.name} />
                </div>
                <div className='flex flex-col'>
                    <h2>{props.name}</h2>
                    <h3>{props.taskCount} {props.taskCount === 1 ? "Place" : "Places"}</h3>
                </div>
            </Link>
        </Card>
    </li>
  )
}

export default UserItem