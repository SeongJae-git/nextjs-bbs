import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

const DynamicRouteUserTest: React.FC<Params> = ({ params }) => {
    const { id } = params;
    return <>유저아이디: {id} </>;
};

export default DynamicRouteUserTest;
