type SectionLabelProps = {
  number: string;
  children: React.ReactNode;
};

export default function SectionLabel({ number, children }: SectionLabelProps) {
  return (
    <p className="section-label">
      <span className="label-dot" aria-hidden="true" />
      <span>{number} /</span> {children}
    </p>
  );
}
