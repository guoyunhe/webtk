import classNames from 'classnames';

export interface WindowProps
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  icon?: string;
}

export default function Window({ children, className, icon, title, ...rest }: WindowProps) {
  return (
    <div className={classNames('webtk-window', className)} {...rest}>
      <div className="webtk-window-title-bar">
        <img className="webtk-window-icon" src={icon} />

        <div className="webtk-window-title">{title}</div>
        <div className="webtk-window-actions">
          <button className="webtk-window-action webtk-window-action-minimize" />
          <button className="webtk-window-action webtk-window-action-maximize" />
          <button className="webtk-window-action webtk-window-action-close" />
        </div>
      </div>
      {children}
    </div>
  );
}
