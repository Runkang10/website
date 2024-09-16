// Project page (Show single project)
// import Link from "@/sys-app-webkit/next/components/link";
import { projectsDirectory, getContentMarkdown, getAllContentsMarkdown } from "@/lib/markdown";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/header";


const ProjectPage = async ({ params }: { params: { slug: string } }) => {
    const projectData = await getContentMarkdown(projectsDirectory, params.slug);

    if (!projectData) {
        return notFound();
    }

    return (
        <>
            <Header disableDefaultBackground headerClassName="py-32 lg:py-40">
                <div className="relative z-10 flex-1 flex items-center justify-center">
                    <div className="max-w-7xl w-full space-y-4 mx-auto text-center">
                        <h1 className="font-semibold leading-normal lg:text-5xl lg:leading-normal text-4xl">
                            {projectData.title}
                        </h1>
                        <p className="text-base text-muted-foreground">
                            {projectData.description}
                        </p>
                    </div>
                </div>
            </Header>
            <div
                className="prose prose-zinc prose-invert !max-w-7xl"
                dangerouslySetInnerHTML={{ __html: projectData.contentHTML }}
            />
        </>
    )
}

const generateStaticParams = async () => {
    const projects = await getAllContentsMarkdown(projectsDirectory);

    return projects.map((project) => ({
        slug: project.id
    }))
}

const generateMetadata = async ({ params }: { params: { slug: string } }): Promise<Metadata> => {
    const projectHead = await getContentMarkdown(projectsDirectory, params.slug)

    if (!projectHead) {
        return notFound();
    }

    return {
        title: projectHead.title,
        description: projectHead.description,
        keywords: projectHead.keywords,
        openGraph: {
            type: "website",
            title: projectHead.title,
            description: projectHead.description
        },
        twitter: {
            title: projectHead.title,
            description: projectHead.description
        }
    }
}

export { generateStaticParams, generateMetadata };
export default ProjectPage;