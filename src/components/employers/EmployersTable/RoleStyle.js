import {rowData} from './EmployersTable'

export const RoleStyle = () => {
    const roleColors = {
        админ: "red",
        флорист: "black",
        курьер: "blue"
    };

    return (
        <> {roleColors.map((item, index) => {
                <Box
                    sx={{
                        background: item[key] === params.row.role,
                        borderRadius: '12px',
                        padding: '5px 10px',
                        cursor: 'pointer',
                    }}
                >
                    {params.row.role}
                </Box>
            }
        )}
        </>
    );
}

