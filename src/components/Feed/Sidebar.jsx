import { Stack } from '@mui/material';

import { categories } from '../../utils/constants';


const Sidebar = ({ SelectedCategory , SetSelectedCategory}) => {
    return (
        <Stack
            direction="row"
            sx={{
                overflowY: "auto",
                height: { sx: 'auto', md: '93%' },
                flexDirection: { md: 'column' }
            }}>
            {
                categories.map((category) => {
                    return <>
                        <button
                            className="category-btn"
                            onClick={()=> SetSelectedCategory(category.name)}
                            style={{
                                background: category.name === SelectedCategory && '#FC1503', color: 'white'
                            }}
                            key={category.name}>

                            <span style={{
                                color: category.name === SelectedCategory ? 'white' : 'red',
                                marginRight: '15px',
                            }}>
                                {category.icon}
                            </span>
                            <span style={{ opacity: category.name === SelectedCategory ? '1' : '0.8' }}>
                                {category.name}
                            </span>
                        </button>
                    </>
                })
            }
        </Stack>
    )
}

export default Sidebar