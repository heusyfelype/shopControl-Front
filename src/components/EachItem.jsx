import { motion, Reorder } from 'framer-motion';
import CheckBoxItem from './CheckBoxItem';
import InputNameText from './InputNameText';
import InputPrice from './InputPrice';
import InputQtt from './InputQtt';


export function Content({ item, saveReordered }) {
    const token = localStorage.getItem(process.env.REACT_APP_USR_DATA);

    return (
        <Reorder.Item
            key={item.id}
            value={item}
            onDragEnd={saveReordered}
            // style={{ background: 'aliceblue', height: '80px', marginBottom: '10px' }}
            variants={itemAnimation}
        >
            <motion.form >
                <CheckBoxItem item={item} />
                <InputNameText item={item} />
                <InputQtt item={item} />
                <InputPrice item={item} />
            </motion.form>
        </Reorder.Item>
    )
}

const itemAnimation = {
    hidden: { y: 20, opacity: 0, height: '0', },
    visible: {
        y: 0,
        opacity: 1,
        background: 'aliceblue',
        height: '80px',
        marginBottom: '10px',
    }
};