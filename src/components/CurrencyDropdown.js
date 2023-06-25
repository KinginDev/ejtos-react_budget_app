import { useContext} from "react";
import {   AppContext} from "../context/AppContext";
import {Dropdown} from "react-bootstrap";


const CurrencyDropDown = () => {

        const {currencyList,dispatch,currency } = useContext(AppContext)

        const handleClickDropDown = (event,payload) => {
            event.preventDefault()
            dispatch({
                type: 'UPDATE_CURRENCY',
                payload
            })
        }
        return (<Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Currency {currency.sign}{currency.name}
            </Dropdown.Toggle>
        
            <Dropdown.Menu>
            {currencyList.map(cur => (
                <Dropdown.Item key={cur.name} onClick={(event) => handleClickDropDown(event,cur)}>{cur.sign}{cur.name}</Dropdown.Item>
            ))}
             
            </Dropdown.Menu>
          </Dropdown>
        );
      
      
    }
    export default CurrencyDropDown