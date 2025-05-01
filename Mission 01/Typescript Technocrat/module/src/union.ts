{
    type FrontendDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    }

    type BackendDeveloper = {
        skills: string[];
        designation2: "Backend Developer";
    }

    type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

    const fullstackDeveloper: FullstackDeveloper = {
        skills: ["HTML", "CSS", "Express"],
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
    }
}