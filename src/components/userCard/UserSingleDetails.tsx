"use client";
import React from "react";

const UserSingleDetails = ({
	title,
	value,
}: {
	title: string;
	value: string;
}) => {
	return (
		<div className="flex flex-row items-center justify-between">
			<h6 className="text-gray-600 font-medium">{title}</h6>
			<p className="text-gray-800 font-semibold">{value}</p>
		</div>
	);
};

export default UserSingleDetails;
