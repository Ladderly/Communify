import {useEffect} from "react";
import { withRouter, useHistory } from "react-router-dom";

interface Props {
}

const ScrollToTop: React.FC<Props> = (props) => { 
    const history = useHistory();
    useEffect(() => {
        const unlisten = history.listen(() => {
            window.scrollTo(0, 0);
        });
        return () => {
            unlisten();
        };
    }, [history]);

    return null;
};
ScrollToTop.defaultProps = {
}
export default withRouter(ScrollToTop);