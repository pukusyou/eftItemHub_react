import { Form } from 'react-bootstrap';
import data from '../json/task_with_id.json';
/**
 * 配列から辞書型に変更
 *
 * @param {*} array
 * @return {*} 辞書型配列
 */
function array2dict(array) {
    var missions = []
    array.forEach(element => {
        Object.keys(data).forEach(dealer => {
            Object.keys(data[dealer]).some(task => {
                if (element === task) {
                    missions.push({ value: getTaskId(dealer, task), label: element })
                    return true
                }
            });
        });

    });
    return missions
}

function getTaskId(dealerName, taskName) {
    return data[dealerName][taskName]["id"]
}

function Checkbox({ missions, selected, setSelectedMissions }) {
    const handleCheckboxChange = (event) => {
        const value = event.target.labels[0].innerText;
        console.log(event.target.labels[0].innerText)
        if (selected.includes(value)) {
            //チェックされているとき
            //配列から削除して、更新
            setSelectedMissions(array2dict(selected.filter((mission) => mission !== value)))
        } else {
            //チェックされてないとき
            //配列に追加して、更新
            setSelectedMissions(array2dict([...selected, value]));
        }
    };
    return (
        <Form.Group className="mb-3 text-white">
            <div className="d-flex flex-wrap mt-3 ms-2">
                {missions.map((mission) => (
                    <Form.Check
                        key={mission.value}
                        type="checkbox"
                        id={`${mission.value}`}
                        label={mission.label}
                        value={mission.value}
                        className="mb-2 w-50 mt-1"
                        checked={selected !== undefined ? selected.includes(mission.label) : [].includes(mission.label)}
                        onChange={handleCheckboxChange}
                    />
                ))}
            </div>
        </Form.Group>
    );
}

export default Checkbox
