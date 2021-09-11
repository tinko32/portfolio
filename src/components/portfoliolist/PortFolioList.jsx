import './PortFolioList.scss';

export default function PortFolioList({id, title, active, setSelected}) {
    return (
        <li className={active ? "portfoliolist active" 
         : "portfoliolist"}
          onclick={() => setSelected(id)}>
            {title}
        </li>
    )
}
