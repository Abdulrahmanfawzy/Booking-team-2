import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";
import { contactUsData } from "./data";

export default function ContactUsPage() {
  return (
    <section className="container mx-auto pt-30">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Left - Info */}
        <div>
          <h1 className="font-heading text-3xl md:text-4xl font-bold text-text-h mb-3">
            Contact Us
          </h1>
          <p className="text-text text-sm leading-relaxed max-w-sm mb-10">
            We are committed to processing the information in order to contact
            you and talk about your questions
          </p>

          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3">
              <Phone className="size-5 text-brand" />
              <span className="text-sm text-text-h">080 707 555-321</span>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="size-5 text-brand" />
              <span className="text-sm text-text-h">demo@example.com</span>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="size-5 text-brand mt-0.5" />
              <span className="text-sm text-text-h leading-relaxed">
                526 Melrose Street, Water Mill, 11976
                <br />
                New York
              </span>
            </div>
          </div>
        </div>

        {/* Right - Form */}
        <div className="flex flex-col gap-4">
          {contactUsData.map((input) => (
            <Input
              key={input.id}
              type={input.type}
              name={input.name}
              placeholder={input.placeholder}
              className="h-11 rounded-lg border-border-secondary px-4"
            />

          ))}
          <Textarea
            placeholder="Message"
            className="min-h-[140px] rounded-lg border-border-secondary px-4 py-3 resize-none"
          />
          <Button
            variant="brand"
            size="xl"
            fullWidth
            className="rounded-full mt-2"
          >
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
}
