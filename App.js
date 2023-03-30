import { StyleSheet, View, Text, Image, ScrollView, Button} from 'react-native';

function Card(props) {
  return (
    <View style={styles.card}>
      <Image style={styles.Img} source={{uri:props.treino.capa}} />
      <View style={styles.text}>
        <Text style={{ 
          color: 'white', 
          fontSize: 15,
          borderLeftColor: 'black',
          borderLeftWidth: 3,
          marginLeft: 3,
          marginTop: 6,
          }}> {props.treino.titulo}</Text>
      </View>
      <Button
        onClick={() => this.props.onDelete(this.props.id)}
        key={items.id}
        id={items.id}
        title="excluir"
        color= "black"
      />
    </View>
  )
}

class items {
  
  handleDelete = itemsId => {
    const items = this.state.items.filter(items => items.id !== itemsId);
    this.setState({ items: items });
  }
};

export default function App() {
  const treino = [
    {
      capa: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto.gif",
      titulo: 'Supino Reto com Barra',
      id: "1",
    },
    {
      capa: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-reto-com-halteres.gif",
      titulo: 'Supino Reto com Halter',
      id: "2",
    },
    {
      capa: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-inclinado-com-halteres.gif",
      titulo: 'Supino Inclinado Halter',
      id: "3",

    },
    {
      capa: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/supino-inclinado-com-barra.gif",
      titulo: 'Supino Inclinado Barra',
      id: "4",
    },
    {
      capa: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-no-aparelho.gif",
      titulo: 'Voador no peck dack',
      id: "5",
    },
    {
      capa: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/voador-cabo-banco-inclinado.gif",
      titulo: 'Voador inclinado',
      id: "6",
    },
    {
      capa: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/flexao-de-bracos.gif",
      titulo: 'Flexão Militar',
      id: "7",
    },
    {
      capa: "https://www.mundoboaforma.com.br/wp-content/uploads/2020/12/flexao-de-bracos-inclinada.gif",
      titulo: 'Flexão Inclinada',
      id: "8",
    },
  ]

  return (
    <ScrollView>
    <View style={styles.container}>
      <Text style={{fontSize: 30, fontWeight: 'bold', color: 'white'}}>Gym</Text>
      <View style={styles.conteudo} >
      <View style={styles.treino}>
          {treino.map((treino) => (
            <Card 
              treino={treino}           
            />
            ))}
        </View>
      </View>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 27,
    backgroundColor: '#171414',
  },
  Img: {
    resizeMode:'stretch', 
    height: 200,
    borderRadius: 10,
  },
  conteudo: {
    flex: 1,
    backgroundColor: '#3b3535',
    width: '100%',
  },
  treino: {
    flexWrap: "wrap",
    justifyContent: "center",
    flexDirection: 'row',
  },
  card: {
    width: 180,
    height: 265,
    backgroundColor: 'grey',
    borderRadius: 10,
    margin: 10,
  },
  text: {
    marginTop: -2,
    flex: 1,
    fontSize: 2,
  }
});
