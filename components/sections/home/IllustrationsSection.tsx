import { HomeIllustrationsPreview } from "@/components/illustrations/HomeIllustrationsPreview";
import CTAWithIcon from "@/components/CTAWithIcon";

export function IllustrationsSection() {
  return (
    <div className="card flex flex-col gap-5">
      <HomeIllustrationsPreview />
      <CTAWithIcon label="See Illustrations" href="/illustrations" />
    </div>
  );
}
