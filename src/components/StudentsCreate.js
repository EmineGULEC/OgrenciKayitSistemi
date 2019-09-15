import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextInput, Picker, Text } from 'react-native';
import { Button, Card, CardSection, Spinner } from '../ortak';
import { studentChanged, studentCreate } from '../actions';


class StudentsCreate extends Component {
    clickSave(){
        const { isim, 
            soyisim, 
            ogrencinumara, 
            sube } = this.props;

        this.props.studentCreate({ isim, soyisim, ogrencinumara, sube });
    }
    renderButton() {
        if (!this.props.loading) { //false ise butonu göster
          return <Button onPress={this.clickSave.bind(this)}>Kaydet</Button>
        }
        return <Spinner size='small' />; //loading true ise spinner göster
      }
    render () {
        const { inputStyle } = styles;
        return (
                <Card>
                <CardSection>
                <TextInput
                    placeholder="İsim"
                    style={inputStyle}
                    value={this.props.isim}
                    onChangeText={isim => this.props.studentChanged({props: 'isim', value: isim})}
                />
                </CardSection>

                <CardSection>
                    <TextInput
                        placeholder="Soyisim"
                        style={inputStyle}
                        value={this.props.soyisim}
                        onChangeText={soyisim => this.props.studentChanged({props: 'soyisim', value: soyisim})}
                    />
                </CardSection>

                <CardSection>
                    <TextInput
                        placeholder="Öğrenci Numarası"
                        style={inputStyle}
                        value={this.props.ogrencinumara}
                        onChangeText={ogrencinumara => this.props.studentChanged({props: 'ogrencinumara', value: ogrencinumara})}
                    />
                </CardSection>
                <CardSection>
                    <Text>Şube Seç</Text>
                    <Picker
                    style={{ flex:1 }}
                    selectedValue={this.props.sube}
                    onValueChange={sube => this.props.studentChanged({props: 'sube', value: sube})}
                    >
                    <Picker.Item label="A Şubesi" value="asubesi" />
                    <Picker.Item label="B Şubesi" value="bsubesi" />
                    <Picker.Item label="C Şubesi" value="csubesi" />
                    <Picker.Item label="D Şubesi" value="dsubesi" />

                    </Picker>
                </CardSection>

                <CardSection>
                    {this.renderButton()}
                </CardSection>

                </Card>
        );
    };
};


const styles = {
    inputStyle: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 18,
        flex: 1
      }
};


mapStateToProps =  ({ studentsListRespone }) => {
    const { isim, soyisim, ogrencinumara, sube, loading } = studentsListRespone;
    return{
      isim,
      soyisim,
      ogrencinumara,
      sube,
      loading
    };
};

export default connect(mapStateToProps, { studentChanged, studentCreate }) (StudentsCreate);

