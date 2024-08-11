import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SereviceCard from "./Card";
import Link from "next/link";

function ServiceTabs() {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="uncontrolled-tab-example"
      className="font-bold"
      fill
    >
      <Tab eventKey="home" title="Cortes">
        <Link
          href={{
            pathname: "/pages/calendar",
            query: {
              title: "Corte Masculino",
              desc: "Corte de cabelo masculino",
              price: "R$50,00",
              duration: "40 min",
            },
          }}
        >
          <div>
            <SereviceCard
              title="Corte Masculino"
              desc="Corte de cabelo masculino"
              price="R$50,00"
              duration="40 min"
            />
          </div>
        </Link>

        <Link
          href={{
            pathname: "/pages/calendar",
            query: {
              title: "Corte Freestyle",
              desc: "(verificar)",
              price: "R$60,00",
              duration: "60 min",
            },
          }}
        >
          <div>
            <SereviceCard
              title="Corte Freestyle"
              desc="(verificar)"
              price="R$60,00"
              duration="60 min"
            />
          </div>
        </Link>

        <Link
          href={{
            pathname: "/pages/calendar",
            query: {
              title: "Barba",
              desc: "Barbear completo, estilos",
              price: "R$50,00",
              duration: "30 min",
            },
          }}
        >
          <div>
            <SereviceCard
              title="Barba"
              desc="Barbear completo, estilos"
              price="R$50,00"
              duration="30 min"
            />
          </div>
        </Link>

        <Link
          href={{
            pathname: "/pages/calendar",
            query: {
              title: "Cabelo e Barba",
              desc: "(verificar)",
              price: "R$90,00",
              duration: "60 min",
            },
          }}
        >
          <div>
            <SereviceCard
              title="Cabelo e Barba"
              desc="(verificar)"
              price="R$90,00"
              duration="60 min"
            />
          </div>
        </Link>
      </Tab>
      <Tab eventKey="profile" title="Outros">
        <Link
          href={{
            pathname: "/pages/calendar",
            query: {
              title: "Sobrancelha",
              desc: "Design de sobrancelha",
              price: "R$15,00",
              duration: "20 min",
            },
          }}
        >
          <div>
            <SereviceCard
              title="Sobrancelha"
              desc="Design de sobrancelha"
              price="R$15,00"
              duration="20 min"
            />
          </div>
        </Link>

        <Link
          href={{
            pathname: "/pages/calendar",
            query: {
              title: "Pigmentação",
              desc: "(verificar)",
              price: "R$60,00",
              duration: "15 min",
            },
          }}
        >
          <div>
            <SereviceCard
              title="Pigmentação"
              desc="(verificar)"
              price="R$60,00"
              duration="15 min"
            />
          </div>
        </Link>

        <Link
          href={{
            pathname: "/pages/calendar",
            query: {
              title: "Relaxamento Capilar",
              desc: "(verificar)",
              price: "R$80,00",
              duration: "60min",
            },
          }}
        >
          <div>
            <SereviceCard
              title="Relaxamento Capilar"
              desc="(verificar)"
              price="R$80,00"
              duration="60min"
            />
          </div>
        </Link>
      </Tab>
      <Tab eventKey="contact" title="Cores">
        <Link
          href={{
            pathname: "/pages/calendar",
            query: {
              title: "Coloração",
              desc: "(verificar)",
              price: "R$230,00",
              duration: "135 min",
            },
          }}
        >
          <div>
            <SereviceCard
              title="Coloração"
              desc="(verificar)"
              price="R$230,00"
              duration="135 min"
            />
          </div>
        </Link>

        <Link
          href={{
            pathname: "/pages/calendar",
            query: {
              title: "Platinado",
              desc: "(verificar)",
              price: "R$250,00",
              duration: "120 min",
            },
          }}
        >
          <div>
            <SereviceCard
              title="Platinado"
              desc="(verificar)"
              price="R$250,00"
              duration="120 min"
            />
          </div>
        </Link>

        <Link
          href={{
            pathname: "/pages/calendar",
            query: {
              title: "Luzes",
              desc: "(verificar)",
              price: "R$150,00",
              duration: "120 min",
            },
          }}
        >
          <div>
            <SereviceCard
              title="Luzes"
              desc="(verificar)"
              price="R$150,00"
              duration="120 min"
            />
          </div>
        </Link>
      </Tab>
    </Tabs>
  );
}

export default ServiceTabs;
