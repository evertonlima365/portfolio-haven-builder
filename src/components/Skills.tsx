import { Card } from "@/components/ui/card";

const Skills = () => {
  const skills = [
    { name: "React", level: "90%" },
    { name: "TypeScript", level: "85%" },
    { name: "Node.js", level: "80%" },
    { name: "Python", level: "75%" },
    { name: "SQL", level: "85%" },
    { name: "AWS", level: "70%" },
  ];

  return (
    <section id="habilidades" className="py-20 bg-muted">
      <div className="container px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Habilidades
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {skills.map((skill) => (
            <Card key={skill.name} className="p-6">
              <h3 className="font-semibold mb-4">{skill.name}</h3>
              <div className="w-full bg-muted rounded-full h-2.5">
                <div
                  className="bg-primary h-2.5 rounded-full transition-all duration-500"
                  style={{ width: skill.level }}
                ></div>
              </div>
              <span className="text-sm text-muted-foreground mt-2 block">
                {skill.level}
              </span>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;