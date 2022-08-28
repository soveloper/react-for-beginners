import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from './routes/Home';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
  /* coin example
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [dollar, setDollar] = useState(0);
  const [availableForPurchase, setAvailableForPurchase] = useState(0);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      })
  }, []);

  const change = (event) => {
    const krw = event.target.value;
    setMoney(krw);
    setDollar(Math.round(krw / 1340.90 * 100000) / 100000);
  }

  const selectChange = (event) => {
    setAvailableForPurchase(Math.round(dollar / event.target.value * 100000) / 100000);
  }

  return (
    <div>
      <h1>Get tickers for all active coins</h1>
      <hr />
      <input type='number' value={money} onChange={change} placeholder='What your money? (unit:KRW)' style={{width:150, marginRight:10}}/>
      {dollar === 0 ? null : `한화: ${money} -> 달러: ${dollar}`}
      <hr />
      {loading ? 'Coin Information Loading...'
        :
        <select onChange={selectChange}>
          <option value=''>choice</option>
          {coins.map((coin) => <option key={coin.id} value={coin.quotes.USD.price}>{coin.name}({coin.symbol})</option>)}
        </select>
      }
      <div>{availableForPurchase} 구매가능</div>
    </div>
  ); */

  /* todo list
  const [todo, setTodo] = useState("");
  const [toDos, setToDos] = useState([]);

  const change = (event) => {
    setTodo(event.target.value);
  };
  const submit = (event) => {
    event.preventDefault();
    if(todo === "") return;

    setToDos(function(currentArray) {
      return [todo, ...currentArray];
    })
    setTodo("");
  }

  return (
    <div>
      <h1>My To Dos ()</h1>
      <form onSubmit={submit}>
        <input type="text" value={todo} onChange={change} placeholder='Write your to do list..' />
        <button>Submit</button>
      </form>
      <ul>
        {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  ); */
}

export default App;
