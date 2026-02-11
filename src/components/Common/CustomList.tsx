import Image from "next/image";

interface CustomListProps {
  items?: string[];
}

const CustomList: React.FC<CustomListProps> = ({ items }) => {
  if (!items) return null;

  return (
    <ul className="custom-list mt-3">
      {items.map((item, index) => (
        <li key={index} className="d-flex align-items-center mb-2">
          <Image
            src="/images/icons/bnoon-symbol.avif"
            alt="icon"
            width={20}
            height={20}
            className="me-2"
          />
          {item}
        </li>
      ))}
    </ul>
  );
};

export default CustomList;
