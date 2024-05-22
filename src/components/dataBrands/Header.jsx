import { useEffect, useState, useRef } from "react";
import logo from "../../../src/img/logo/logo-short.png";
import { useTranslation } from "react-i18next";

function ChildComponent() {
  const { t } = useTranslation();
  const [source, setSource] = useState();
  // const [src, setSrc] = useState("");
  const [user, setUser] = useState([]);
  const [newUrl, setNewUrl] = useState("");
  const urlParams = new URLSearchParams(window.location.search);
  const [showAdditionalOptions, setShowAdditionalOptions] = useState(false);
  const [ipDataCode, setIpDataCode] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuContainerRef = useRef(null);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutsideMenu = (event) => {
      if (
        menuContainerRef.current &&
        !menuContainerRef.current.contains(event.target) &&
        !event.target.classList.contains("btn-menu")
      ) {
        setIsMenuOpen(false);
      }
    };

    // Добавляем обработчик клика при монтировании компонента
    document.addEventListener("click", handleClickOutsideMenu);

    // Очищаем обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleClickOutsideMenu);
    };
  }, [menuContainerRef]);

  useEffect(() => {
    // Добавьте обработчик для изменения размера окна
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Вызовите функцию обработчика при монтировании компонента
    handleResize();

    // Добавьте слушатель события изменения размера окна
    window.addEventListener("resize", handleResize);

    // Очистите слушатель события при размонтировании компонента
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const menuRef = useRef(null);
  const api = "https://pickbonus.myawardwallet.com/api";
  useEffect(() => {
    const idUserParam = urlParams.get("keyword");

    const fetchUsers = async () => {
      if (!idUserParam) return;
      try {
        const res = await fetch(`${api}/user/read_one.php?id=${idUserParam}`);
        if (res.ok) {
          const users = await res.json();

          setUser(users);
        } else {
          console.error("Failed to fetch data:", res.status);
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    fetchUsers();
  }, []);
  // console.log("user", user);

  const handleBalanceChange = (event) => {
    event.stopPropagation();
    setShowAdditionalOptions(!showAdditionalOptions);
  };

  useEffect(() => {
    const url = window.location.href;
    const urlObj = new URL(url);
    const searchParams = new URLSearchParams(urlObj.search);
    const newUrl = "?" + searchParams.toString();
    setNewUrl(newUrl);
  }, []);
  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (!menuRef.current || menuRef.current.contains(event.target)) {
        // Если клик был внутри меню, не скрывать его
        return;
      }
      // Если клик был вне меню, скрыть меню
      setShowAdditionalOptions(false);
    };

    // Добавьте обработчик при монтировании компонента
    document.addEventListener("click", handleDocumentClick);

    // Удалите обработчик при размонтировании компонента
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);

    // Удаляем параметр 'brand', если он есть
    searchParams.delete("brand");

    const currentSource = searchParams.get("keyword");
    let sourceValue = "0"; // Значение по умолчанию для 'source'

    // Проверяем, содержит ли 'keyword' идентификатор партнера
    if (currentSource) {
      const match = currentSource.match(/partner(_)?\d+/);
      if (match) {
        sourceValue = match[0]; // Извлекаем идентификатор партнера
        setSource(sourceValue); // Обновляем состояние 'source' с найденным значением
      } else {
        setSource("0"); // Обновляем состояние 'source', если идентификатор партнера не найден
      }
    } else {
      setSource("0"); // Обновляем состояние 'source', если параметр 'keyword' отсутствует
    }
  });

  console.log("SOURCE!!!!!!!!!!!!", source);

  return (
    <header className="header">
    <div className="navbar-area">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <a className="navbar-brand" href="index.html"
                ><img src={logo} alt="Logo"
              /></a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
  );
}

export default ChildComponent;
