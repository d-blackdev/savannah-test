import UserCard from "@/components/userCard/UserCard";
import { IUser } from "@/types";
import { log } from "console";

export default async function Home() {
	let userData = await fetch("https://dummyjson.com/users?limit=10");
	let users = await userData.json();
	log(users);
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="max-w-[1560px] justify-center w-full grid xl:grid-cols-4 2xl:grid-cols-5 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-y-10 gap-x-5 mt-80">
				{users &&
					users?.users?.map((user: IUser) => (
						<UserCard {...user} key={user?.id} />
					))}
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	);
}
