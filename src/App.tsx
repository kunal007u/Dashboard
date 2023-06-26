import AppRouting from './Routes/AppRouting';
import {  useSelector } from 'react-redux'
import { RootState } from './Store/Store';

function App(): JSX.Element {
  const currentTheme = useSelector((state: RootState) => state.CurrentTheme.theme);

  return (
      <div data-theme={currentTheme === "dark" ? "dark" : "garden"}>
        <AppRouting />
      </div>
  );
}

export default App;
