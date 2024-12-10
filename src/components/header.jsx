import chefLogo from "/src/img/chef.png"


export default function Header() {
    return (
      <header>
        <img
          className="chef-img"
          src={chefLogo}
          alt="Chef Claude"
        />
        <h1>Chef Claude</h1>
      </header>
    );
  }
  

