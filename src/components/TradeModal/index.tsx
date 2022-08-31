import { BackgroundGradiente, List, Modal } from "./modal";
import { IoMdClose } from "react-icons/io";
import { AiFillInfoCircle } from "react-icons/ai";
import { Card } from "./card";
const TradeModal = () => {
  const cardList = [
    {
      image:
        "data:image/jpeg;base64,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",
      name: "Smart TV LED 43",
      type: "Tecnologia",
      price: "R$ 2.000,00",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      name: "Smart TV LED 43",
      type: "Tecnologia",
      price: "R$ 2.000,00",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      name: "Smart TV LED 43",
      type: "Tecnologia",
      price: "R$ 2.000,00",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      name: "Smart TV LED 43",
      type: "Tecnologia",
      price: "R$ 2.000,00",
    },
    {
      image:
        "data:image/jpeg;base64,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",
      name: "Smart TV LED 43",
      type: "Tecnologia",
      price: "R$ 2.000,00",
    }
  ];
  return (
    <BackgroundGradiente>
      <Modal>
        <div>
          <h3>Selecione o produto que será trocado</h3>
          <IoMdClose />
        </div>

        <List>
          {cardList.map((card, index) => {
            return (
              <Card key={index}>
                <div>
                  <img src={card.image} alt="" />

                  <div>
                    <div>
                      <h4>{card.type}</h4>
                      <h3>{card.name}</h3>
                    </div>
                    <section>
                      <p>Preço estipulado:</p>
                      <span>{card.price}</span>
                    </section>
                  </div>
                </div>

                <label className="containerCheckbox">
                  <input
                    type="checkbox"
                    name="checked"
                    id=""
                    className="checkbox"
                  />
                  <span className="checkmark"></span>
                </label>
              </Card>
            );
          })}
        </List>

        <button className="btnTrade">Solicitar Troca</button>
      </Modal>
    </BackgroundGradiente>
  );
};

export default TradeModal;
