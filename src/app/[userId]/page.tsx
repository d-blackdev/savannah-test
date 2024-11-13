import UserSingleDetails from "@/components/userCard/UserSingleDetails";
import { IUser } from "@/types";
import { log } from "console";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UserDetail = async ({
	params,
}: {
	params: Promise<{ userId: string }>;
}) => {
	const userId = (await params).userId;

	let userData = await fetch(`https://dummyjson.com/users/${userId}`);
	let user: IUser = await userData.json();

	return (
		<div className="max-w-[1560px] grid grid-cols-1 items-center justify-center  w-screen justify-self-center md:px-0 px-5">
			<div className="w-full h-20 bg-gray-50 flex flex-row items-center justify-center">
				<h6 className="font-bold md:text-2xl text-xl">
					{user?.firstName} {user?.lastName}
				</h6>
			</div>
			<Link href="/" className="pt-5">
				<p className="font-bold text-blue-400">Back</p>
			</Link>
			<div className="w-full flex flex-col items-center justify-center lg:max-w-[40%] md:max-w-[50%]  justify-self-center pt-20">
				<Image
					width={200}
					height={200}
					src={user?.image}
					alt={`user-${user?.firstName}`}
					className="justify-self-center"
				/>
				<div className="w-full mt-5 gap-y-5 flex flex-col">
					<UserSingleDetails title="Username" value={`${user?.username}`} />
					<UserSingleDetails title="Gender" value={`${user?.gender}`} />
					<UserSingleDetails title="Email" value={`${user?.email}`} />
					<UserSingleDetails title="Age" value={`${user?.age}`} />
					<UserSingleDetails title="Phone number" value={`${user?.phone}`} />
				</div>
			</div>
		</div>
	);
};

export default UserDetail;
