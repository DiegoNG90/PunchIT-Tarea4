import {useState, memo} from 'react';
import PropTypes from 'prop-types';

import { InputGroup, FormControl, Form } from 'react-bootstrap';

const Search = ({findCharacters}) => {
    const [character, setCharacter] = useState("");

    const getCharacters = (e) => {
        e.preventDefault()
        findCharacters(character)
        // Inputs controlados vs no controlados
    }
    return (
        <Form onSubmit={getCharacters} className="search-characters__input">
            <FormControl
              onChange={(e) => setCharacter(e.target.value)}
              placeholder="Character..."
              value={character}
              name="character"
            />
        </Form>
     );
}

export default memo(Search);