import PropTypes from 'prop-types'
import {Row, Container} from 'react-bootstrap'

import Character from '../Character'

const Characters = ({characters}) => {
    return (
      <Container>
        <Row className="justify-content-center">
              {characters.map(character => {
                  return <Character {...character} key={character.key}/>
              })}
        </Row>
      </Container>
    );
}

// Version Corta, con instanceOf
// Characters.propTypes = {
//     characters: PropTypes.instanceOf(Array) // (Object)
// }

// Version larga, con arrayOf y shape
Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      created: PropTypes.string,
      gender: PropTypes.string,
      id: PropTypes.number,
      name: PropTypes.string,
      species: PropTypes.string,
      status: PropTypes.string,
      image: PropTypes.string,
    }).isRequired
  ),
};

export default Characters;