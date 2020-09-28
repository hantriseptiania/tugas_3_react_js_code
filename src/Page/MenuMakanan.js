import React, {Component} from 'react';
import ListMakanan from '../ListData/ListMakanan';

class MenuMakanan extends Component {
	constructor(props){
		super (props)
		this.state = {
			pesan : 0,
		}
		this.rubahPesanan = this.rubahPesanan.bind(this);
		this.pesanan = this.pesanan.bind(this);
	}

	rubahPesanan (e){
		e.preventDefault();
		
		var tampungPesan = this.state.pesan + 1;
		this.setState((state,props) => ({
			pesan : tampungPesan
		}));
	}

	pesanan(e){
		e.preventDefault()
		console.log(e.target.value)
	}

	render(){
		return(
			<div>
			<h3>Daftar Makanan Yang Kami Sediakan : </h3>
			<table>
				<tbody>
				<tr>
					<td>
					<ListMakanan dataGambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg"/>
					<center>
						<button onClick={(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
					</center>
					</td>

					<td>
					<ListMakanan dataGambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" alt="Product Makanan"/>
						<button onClick = {(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
					</td>

					<td>
					<ListMakanan dataGambar = "https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" alt="Product Makanan"/>
						<button onClick = {(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
					</td>

					<td>
					<ListMakanan dataGambar = "https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" alt="Product Makanan"/>
						<button onClick = {(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
					</td>

					<td>
					<ListMakanan dataGambar = "https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg" alt="Product Makanan"/>
						<button onClick = {(e) => this.rubahPesanan(e)}>Pesan Sekarang</button>
					</td>

				</tr>
				</tbody>
			</table>

			<br/>
				
				<input type="text" onChange={(e) => this.pesanan(e)}/>
				<h3>Pesanan Anda : {this.state.pesan}</h3>
			</div>
		);
	}
}

export default MenuMakanan;