import './Container.css'; 

export default function Container({ children }) {
  return <div className="container px-4 md:px-8">{children}</div>;
}
