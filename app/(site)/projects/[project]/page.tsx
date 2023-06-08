import { getProject } from "@/sanity/sanity-utils";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
type Props = {
	params: { project: string };
};
export default async function Project({ params }: Props) {
	const slug = params.project;
	const project = await getProject(slug);

	return (
		<div>
			<h1>{project.name}</h1>
			<Image src={project.image} alt={project.name} width={1920} height={1080} />
			<PortableText value={project.content} />
		</div>
	);
}
