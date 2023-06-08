import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
	const projects = await getProjects();
	return (
		<div>
			{projects.map((project) => (
				<Link href={`/projects/${project.slug}`} key={project._id}>
					{project.name}
					{project.image && <Image src={project.image} alt={project.name} width={250} height={100} />}
				</Link>
			))}
		</div>
	);
}
