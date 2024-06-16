
import "./BodyContent.less";


type BodyContentType = {
  children: any;
}

export default function BodyContent({children} : BodyContentType) {
  return (
    <div className="body-content">
      {children}
    </div>
  );
}