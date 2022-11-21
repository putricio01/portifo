// Import Assets
import uniswap from '../assets/uniswap.png';
import compound from '../assets/compound.png';
import aave from '../assets/aave.png';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Projects</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>nft marketplace</h3>
                    <img src={uniswap} alt="Uniswap Swap Page" />
                    <p>
                        nft marketplace built from scartch with help of the freecodecamp tutorial
                    </p>

                    <a href="https://nft-mkt-99-gfgs-putricio01.vercel.app/" target="_blank" className="button">Site</a>
                    <a href="https://github.com/putricio01/nft-mkt-99" target="_blank" className="button">Code</a>
                </div>

                

               
            </div>
        </section>
    );
}

export default Projects;