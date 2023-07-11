import { Link, useParams } from "react-router-dom";
import "./Sommaire.scss";
import { normalizeString } from "../../Helpers/Convert";

function Sommaire(data) {
  const jsonData = data.props.props;
  const { id } = useParams();
  const selectedChildren = jsonData.find(
    (item) => normalizeString(item.nomenclature.libelle) === id
  );

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h2> {selectedChildren.nomenclature.libelle} / Sommaire</h2>
          <Link to="/" className="btn-close">
            Fermer x
          </Link>
        </div>

        <div className="full-content">
          <div className="menu">
            {selectedChildren.nomenclature.children.map((keys, index) => (
              <ul className="bloc-menu" key={index}>
                <li className="fr-partie" key={index}>
                  {keys.libelle}
                </li>
                <ul class="sub-menu">
                  {keys.children.map((key, index) => {
                    return (
                      <li key={index}>
                        <Link to={`../detail-search/${id}/${key.libelle}`}>
                          {key.libelle}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sommaire;
