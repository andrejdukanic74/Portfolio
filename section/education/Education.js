import { HistoryCard } from "@components/HistoryCard";

export const Education = (props) => {

    const { passdata } = props;

    const university1 = passdata.university1;
    const university2 = passdata.university2;

    return (
        <div className="flex items-center justify-center" style={{ flexDirection: 'column' }}>
            <HistoryCard passdata={university1} width={700} />
            <HistoryCard passdata={university2} width={800} />
        </div>
    );
};

