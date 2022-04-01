import {rowData} from './EmployersTable'
import Box from "@mui/material/Box";
corier_status: 'админ'

export const RoleStyle = () => {
    const roleColors = {
        админ: "red",
        флорист: "black",
        курьер: "blue"
    };
    return (
        <> {roleColors.map((item, index) => {
               return (
                <Box
                    key={index}
                    sx={{
                        borderRadius: '12px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                        background: roleColors[item]
                    }}
                >
                   {params.row.role}
                </Box>
);

         })}
        </>
    );
}
console.log(RoleStyle)

