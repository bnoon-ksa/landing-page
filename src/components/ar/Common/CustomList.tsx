import OptimizedImage from '@/components/ui/OptimizedImage';

interface CustomListProps {
  items?: string[];
}

const CustomList: React.FC<CustomListProps> = ({ items }) => {
  if (!items) return null;

  return (
    <ul className="custom-list mt-3">
      {items.map((item, index) => (
        <li key={index} className="d-flex align-items-center mb-2">
          <OptimizedImage imageName="bnoon-symbol" className="me-2" alt="icon" />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CustomList;
