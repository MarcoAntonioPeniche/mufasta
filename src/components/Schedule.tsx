import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

const Schedule = () => {
  const horarios = [
    { day: "Segunda a Sexta", time: "09:00 - 19:00" },
    { day: "Sábado", time: "09:00 - 17:00" },
    { day: "Domingo", time: "Fechado" },
  ];

  return (
    <section id="schedule" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Horários
          </h2>
          <p className="text-lg text-muted-foreground">
            Confira os horários de funcionamento
          </p>
        </div>

        <div className="max-w-2xl mx-auto animate-scale-in">
          <Card className="p-8 bg-card border-primary/30 hover:border-primary/50 transition-colors">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
              <Clock className="text-primary" size={28} />
              <h3 className="text-2xl font-bold text-primary">Horário de Funcionamento</h3>
            </div>
            <div className="space-y-4">
              {horarios.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-3 px-4 bg-secondary/50 rounded-lg"
                >
                  <span className="text-base font-medium text-foreground">
                    {item.day}
                  </span>
                  <span className="text-lg font-bold text-primary">
                    {item.time}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Card de Atenção */}
        <div className="max-w-2xl mx-auto mt-8 animate-fade-in">
          <Card className="p-6 bg-card/50 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Recomendação Importante
                </h4>
                <p className="text-muted-foreground">
                  Recomendamos agendar com antecedência para garantir seu horário e receber o melhor atendimento.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
