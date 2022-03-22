import {rowData} from './EmployersTable'
import 

export const RoleStyle = () => {
    const roleColors = {
        admin: "red",
        флорист: "black",
        курьер: "blue"
    };

    return (
        <> {roleColors.map((item, index) => {
               return (
                <Box
                    sx={{
                        // background: 
                        borderRadius: '12px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                    }}
                >
                    {item.admin}
                </Box>
            
);
                
         })}
        </>
    );
}
console.log(RoleStyle)

