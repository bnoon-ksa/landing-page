import type { Metadata } from 'next';
import Navbar from '@/components/ar/Layout/Navbar';
import SemenCollectionInstructions from '@/components/ar/Common/SemenCollectionInstructions';

export const metadata: Metadata = {
  title: 'حقوق المرضى – بنون',
  description:
    'تعرّفوا على حقوقكم كمرضى في مراكز بنون. نلتزم بتقديم رعاية طبية شفافة وعادلة تحترم خصوصيتكم وكرامتكم وفقاً للمعايير الصحية السعودية.',
};

export default function ServerPatientsRightsPage() {
  return (
    <div className="patient-rights-page no-footer">
      <Navbar />
      <SemenCollectionInstructions />
    </div>
  );
}
