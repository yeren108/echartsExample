function jjj(){
	count1 = echarts.init(document.getElementById('line1'));

	var option1 = {
			title : {
				text : '账单类型分布',

				x : 'center'
			},
			tooltip : {
				trigger : 'item',
				formatter : "{a} <br/>{b} : {c} ({d}%)"
			},
			legend : {
				orient : 'vertical',
				x : 'left',
				data : [ '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎' ]
			},
			toolbox : {
				show : true,
				feature : {
					mark : {
						show : false
					},
					dataView : {
						show : true,
						readOnly : false
					},
					restore : {
						show : true
					},
					saveAsImage : {
						show : true
					}
				}
			},
			calculable : false,
			series : [ {
				name : '访问来源',
				type : 'pie',
				radius : '55%',
				center : [ '50%', '60%' ],
				data : [ {
					value : 335,
					name : '直接访问'
				}, {
					value : 310,
					name : '邮件营销'
				}, {
					value : 234,
					name : '联盟广告'
				}, {
					value : 135,
					name : '视频广告'
				}, {
					value : 1548,
					name : '搜索引擎'
				} ],
				itemStyle : {
					emphasis : {
						shadowBlur : 10,
						shadowOffsetX : 0,
						shadowColor : 'rgba(0, 0, 0, 0.5)'
					}
				}
			} ]
		};

		try {
			if (count1.getOption()) {
				count1.clear();
				count1.dispose();
				count1 = echarts.init(document.getElementById('line1'));
				count1.setOption(option1);
			}
		} catch (e) {
			count1.setOption(option1);
		}
}	


function showCountMessageChart() {
	var url = "www.baidu.com";

	$.ajax({
		url : url,
//		data : $("#searchForm").serialize(),
		type : 'get',
		success : function(data) {
//			var time = data.timeA;
//			var count = data.countB;
//			var ex = data.exC;

			var option2 = {
				title : {
					text : '账单类型分布',

					x : 'center'
				},
				tooltip : {
					trigger : 'item',
					formatter : "{a} <br/>{b} : {c} ({d}%)"
				},
				legend : {
					orient : 'vertical',
					x : 'left',
					data : [ '直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎' ]
				},
				toolbox : {
					show : true,
					feature : {
						mark : {
							show : false
						},
						dataView : {
							show : true,
							readOnly : false
						},
						restore : {
							show : true
						},
						saveAsImage : {
							show : true
						}
					}
				},
				calculable : false,
				series : [ {
					name : '访问来源',
					type : 'pie',
					radius : '55%',
					center : [ '50%', '60%' ],
					data : [ {
						value : 335,
						name : '直接访问'
					}, {
						value : 310,
						name : '邮件营销'
					}, {
						value : 234,
						name : '联盟广告'
					}, {
						value : 135,
						name : '视频广告'
					}, {
						value : 1548,
						name : '搜索引擎'
					} ],
					itemStyle : {
						emphasis : {
							shadowBlur : 10,
							shadowOffsetX : 0,
							shadowColor : 'rgba(0, 0, 0, 0.5)'
						}
					}
				} ]
			};

			try {
				if (count1.getOption()) {
					count1.clear();
					count1.dispose();
					count1 = echarts.init(document.getElementById('line1'));
					count1.setOption(option1);
				}
			} catch (e) {
				count1.setOption(option1);
			}
		}
	});
}