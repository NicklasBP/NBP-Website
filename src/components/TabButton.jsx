import styled from 'styled-components';

// Define a styled component for the App container
const ButtonItem= styled.li`
  padding: 5px;
`;

const Button = styled.button`
  padding: 10px 20px;
  cursor: pointer;
  background-color: transparent;
  border: 3px solid transparent; /* Set a transparent border to avoid shifting */
  color: white;

  &.active {
    border: 3px solid white; /* When active, apply white border */
  }

  &:focus {
    outline: none; /* Remove focus outline */
    border: 3px solid white; /* Keep white border on focus */
  }

  &:active {
    outline: none; /* Remove outline on active */
    border: 3px solid white; /* Remove border when clicked */
  }

  &:hover {
    border: 3px solid rgb(255,255,255,0.4);
  }

  
`;


export default function TabButton({ children, isSelected, ...props }) {
    console.log('TABBUTTON COMPONENT EXECUTING');
    return (
            <ButtonItem>
                <Button className={isSelected ? 'active' : undefined} {...props}>
                    {children}
                </Button>
            </ButtonItem>
    );
}