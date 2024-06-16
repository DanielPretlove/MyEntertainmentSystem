import "./PageWrapper.less";

export default function PageWrapper(props: any) {
  return (
    <div className="page-wrapper">
        {props.children}    
    </div>
  )
}