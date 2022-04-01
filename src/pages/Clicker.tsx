import React, { useState } from 'react';
import styles from './Clicker.module.css';
import { FaShoppingCart } from '@react-icons/all-files/fa/FaShoppingCart';
import { FaHome } from '@react-icons/all-files/fa/FaHome';
import { Link } from 'react-router-dom';

interface ShopItem {
	internalName: string;
	displayName: string;
	description: string;
	price: number;
	exec: {
		text?: string;
		color?: string;
		image?: string;
	};
}

const Clicker: React.FC<{ dark: boolean }> = ({ dark }) => {
	const previousCount = localStorage.getItem('count');
	const previousPurchases = localStorage.getItem('purchased');

	const previousText = localStorage.getItem('text');
	const previousColor = localStorage.getItem('color');
	const previousImage = localStorage.getItem('image');

	const [clickedCount, setClicked] = useState<number>(JSON.parse(previousCount ?? '0'));
	const [purchasedItems, setPurchased] = useState<string[]>(
		JSON.parse(previousPurchases ?? '["defaultColor", "defaultText"]')
	);

	const [hText, setHText] = useState(previousText ?? 'h');
	const [hColor, setHColor] = useState(previousColor ?? dark ? '#ffffff' : '#000000');
	const [hImage, setHImage] = useState(previousImage ?? 'none');

	// this is only used on mobile, but also doesnt matter to save like the other ones.
	const [shouldShowShopLayout, setShopLayoutShown] = useState(false);

	function buttonClick(event: React.MouseEvent) {
		localStorage.setItem('count', JSON.stringify(clickedCount + 1));
		setClicked(count => count + 1);
	}

	function shopItemBuyInternals(shopItem: ShopItem) {
		if (shopItem.price > clickedCount) {
			return alert('You cannot buy that item.');
		}

		setClicked(count => count - shopItem.price);
		setPurchased(purchased => [...purchased, shopItem.internalName]);

		if (shopItem.exec.color) {
			localStorage.setItem('color', shopItem.exec.color);
			setHColor(shopItem.exec.color);
		}

		if (shopItem.exec.text) {
			localStorage.setItem('text', shopItem.exec.text);
			setHText(shopItem.exec.text);
		}

		if (shopItem.exec.image) {
			localStorage.setItem('image', shopItem.exec.image);
			localStorage.setItem('color', 'transparent');
			setHColor('transparent');
			setHImage(shopItem.exec.image);
		}

		localStorage.setItem('count', JSON.stringify(clickedCount));
		localStorage.setItem('purchased', JSON.stringify(purchasedItems));
	}

	const shopItems: ShopItem[] = [
		{
			internalName: 'defaultColor',
			displayName: 'Blank H',
			description: 'Simply just a colorless H.',
			price: 0,
			exec: {
				color: dark ? '#ffffff' : '#000000'
			}
		},
		{
			internalName: 'defaultText',
			displayName: 'h',
			description: 'Simply just an h.',
			price: 0,
			exec: {
				text: 'h'
			}
		}
	];

	return (
		<>
			<div className={styles.desktopGrid}>
				<div className={styles.sidebar}>
					<div className={styles.sidebarTextBox}>
						<small className={styles.small}>H's clicked</small>
						<h2>{clickedCount}</h2>
					</div>
				</div>

				<div className={styles.buttonFlexer}>
					<button
						className={styles.button}
						onClick={buttonClick}
						style={{
							color: hColor,
							backgroundImage: hImage
						}}
					>
						{hText}
					</button>
				</div>

				<div className={styles.sidebar}>
					<div className={styles.sidebarTextBox}>
						<h2>Shop</h2>
						<p>Upqrade and improve your h.</p>
					</div>

					{shopItems.map(shopItem => {
						const buyItem = (event: React.MouseEvent) => {
							shopItemBuyInternals(shopItem);
						};

						return (
							<div onClick={buyItem} key={shopItem.internalName} className={styles.shopItem}>
								<small className={styles.small}>costs {shopItem.price} h</small>
								<h2>{shopItem.displayName}</h2>
								<p>{shopItem.description}</p>
								<p
									className={
										purchasedItems.includes(shopItem.internalName)
											? styles.purchased
											: styles.notPurchased
									}
								>
									{purchasedItems.includes(shopItem.internalName) ? 'Purchased' : 'Not purchased'}
								</p>
							</div>
						);
					})}
				</div>
			</div>
			<div className={styles.mobileGrid}>
				{shouldShowShopLayout && (
					<div className={styles.mobileSidebar}>
						<div className={styles.sidebarTextBox}>
							<h2>Shop</h2>
							<p>Upqrade and improve your h.</p>
							<p>
								You currently have <span className={styles.purchased}>{clickedCount}</span> h in your
								hank.
							</p>
						</div>

						{shopItems.map(shopItem => {
							const buyItem = (event: React.MouseEvent) => {
								shopItemBuyInternals(shopItem);
							};

							return (
								<div onClick={buyItem} key={shopItem.internalName} className={styles.shopItem}>
									<small className={styles.small}>costs {shopItem.price} h</small>
									<h2>{shopItem.displayName}</h2>
									<p>{shopItem.description}</p>
									<p
										className={
											purchasedItems.includes(shopItem.internalName)
												? styles.purchased
												: styles.notPurchased
										}
									>
										{purchasedItems.includes(shopItem.internalName) ? 'Purchased' : 'Not purchased'}
									</p>
								</div>
							);
						})}
					</div>
				)}

				{!shouldShowShopLayout && (
					<>
						<div className={styles.sidebar}>
							<div className={styles.sidebarTextBox}>
								<small className={styles.small}>H's clicked</small>
								<h2>{clickedCount}</h2>
							</div>
						</div>

						<div className={styles.buttonFlexer}>
							<button
								className={styles.button}
								onClick={buttonClick}
								style={{
									color: hColor,
									backgroundImage: hImage
								}}
							>
								{hText}
							</button>
						</div>
					</>
				)}

				<div className={styles.sidebarBaseBox}>
					<Link to="/" className={styles.link}>
						<FaHome size="2em" />
					</Link>
					<button className={styles.baseButton} onClick={() => setShopLayoutShown(current => !current)}>
						<FaShoppingCart size={'2em'} className={shouldShowShopLayout ? styles.purchased : ''} />
					</button>
				</div>
			</div>
		</>
	);
};

export default Clicker;
