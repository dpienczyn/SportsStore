import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/from";

@Injectable()
export class StaticDataSource {
	private products: Product[] = [
	new Product(1, "Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
	new Product(2, "Produkt 2", "Kategoria 2", "Produkt 2 (Kategoria 2)", 2555),
	new Product(2, "Produkt 2", "Kategoria 2", "Produkt 2 (Kategoria 2)", 2555),
	new Product(2, "Produkt 2", "Kategoria 2", "Produkt 2 (Kategoria 2)", 2555),
	new Product(2, "Produkt 2", "Kategoria 2", "Produkt 2 (Kategoria 2)", 2555),
	new Product(1, "Produkt 1", "Kategoria 1", "Produkt 1 (Kategoria 1)", 100),
	new Product(2, "Produkt 2", "Kategoria 2", "Produkt 2 (Kategoria 2)", 2555),
	new Product(2, "Produkt 2", "Kategoria 2", "Produkt 2 (Kategoria 2)", 2555),
	new Product(2, "Produkt 2", "Kategoria 2", "Produkt 2 (Kategoria 2)", 2555),
	new Product(2, "Produkt 2", "Kategoria 2", "Produkt 2 (Kategoria 2)", 2555),
	];

	getProducts(): Observable<Product[]> {
		return Observable.from([this.products]);
	}
}