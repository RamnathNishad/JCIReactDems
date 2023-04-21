import './AppFooter.css';
interface footerProps{
    website:string;
    company:string;
    year:number;
}

function AppFooter({website,company,year}:footerProps){   
     
    return(
        <div>
            <p className="app-footer">&copy; {year}- All rigts reserved by <a href={website}>{company}</a></p>
        </div>
    );
}

export default AppFooter;