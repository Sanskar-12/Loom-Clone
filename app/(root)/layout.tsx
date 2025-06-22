import Navbar from "@/components/Navbar";

interface rootLayoutProps {
  children: React.ReactNode;
}

const rootLayout = ({ children }: rootLayoutProps) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default rootLayout;
