import { render } from "@testing-library/react";
import App from "../../../components/App/App";

describe('app component', () => {
    it('renders correctly without crashing', () => {
        render(<App/>);
    });
});